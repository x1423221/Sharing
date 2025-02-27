<template>
  <el-dialog v-model="dialogFormVisible" 
            destroy-on-close :show-close="false"
            width="80%"
            :lock-scroll="false"
            :close-on-click-modal="false">
    <el-form :model="dialogpayment">
      <el-divider content-position="left">帳目維護</el-divider>
      <el-form-item label="帳目名稱" :label-width="formLabelWidth">
        <el-input v-model="dialogpayment.description" autocomplete="off" />
      </el-form-item>
      <el-form-item label="帳目總金額" :label-width="formLabelWidth">
        <el-input v-model="dialogpayment.amount" inputmode="decimal"></el-input>
      </el-form-item>
      <el-divider content-position="left">分攤明細</el-divider>
      <el-scrollbar ref="ShareArea" height="300px">
        <el-row :gutter="3" v-for="(item, index) in dialogpayment.split" :key="index">
          <el-col :span="7">
            <el-select v-model="dialogpayment.split[index].userId" @change="MemberChange(index)">
              <el-option v-for="u in MemberList.value" :key="u.userId" :label="u.name" :value="u.userId" />
            </el-select>
          </el-col>
          <el-col :span="17">
            <el-input v-model="dialogpayment.split[index].share" inputmode="decimal" style="width:100%"></el-input>
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="CloseDialog(false)">關閉</el-button>
        <el-button type="primary" @click="CloseDialog(true)">
          儲存
        </el-button>
        <el-button type="success" @click="Newshare">新增</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import db from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, inject, nextTick , defineModel} from "vue";


const ShareArea = ref(null);
const MemberList = inject("MemberList");
const profile = inject("profile");

const dialogFormVisible = defineModel("dialogFormVisible", { default: false });
const DocId = defineModel("DocId");
const dialogpayment = defineModel("dialogpayment");
const formLabelWidth = "140px"

const CloseDialog = async (NeedUpdate) => {
  const transListdocRef = doc(db, "transactionList", DocId.value);
  if (NeedUpdate) {
    const isOverflow = dialogpayment.value.split
      .filter(s => s.userName !== dialogpayment.value.payer)
      .reduce((sum, s) => Number(sum) + Number(s.share), 0)
      > dialogpayment.value.amount

    if (isOverflow) {
      alert("明細總金額 超過 帳目總金額")
      return;
    }

    await updateDoc(transListdocRef, {
      [`${dialogpayment.value.id}.description`]: dialogpayment.value.description,
      [`${dialogpayment.value.id}.amount`]: Number(dialogpayment.value.amount),
      [`${dialogpayment.value.id}.split`]: dialogpayment.value.split,
    });
  }

  await updateDoc(transListdocRef, {
    [`${dialogpayment.value.id}.isLock`]: false,
  });

  dialogFormVisible.value = false;
}

const Newshare = () => {
  dialogpayment.value.split.push({
    share: Number(0),
    userId: profile.value.userId,
    userName: profile.value.displayName,
  });

  nextTick(() => {
    if (ShareArea.value)
      ShareArea.value.wrapRef.scrollTop = ShareArea.value.wrapRef.scrollHeight
  })
};

const MemberChange = (index) => {
  const selectedUser = MemberList.value.find(
    (m) => m.userId === dialogpayment.value.split[index].userId
  );

  dialogpayment.value.split[index].userName = selectedUser.name;
};
</script>

<style scoped src="../../public/Page.css"></style>
