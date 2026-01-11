import apiBackEnd from "@/utils/apiBackEnd";

import { reactive, readonly } from "vue";

const state = reactive({
  roles: [],
  loading: false,
  error: null,
});

const getRoles = async () => {
  state.loading = true;
  state.error = null;

  try {
    const response = await apiBackEnd.get("/roles");
    state.roles = response.data.data.roles;
  } catch (error) {
    state.error =
      error.response?.data?.error || "Gagal mengambil data role";
  } finally {
    state.loading = false;
  }
};


export const useRoleStore = () => {
  return {
    state: readonly(state),
    getRoles,
  };
};