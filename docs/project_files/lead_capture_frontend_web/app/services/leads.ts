import { Lead } from "../api/leads/model";
import { post } from "../utils/apiBase";

export const captureLead = async (leadData: Lead) => {
  return post<{ message: string }>("/leads", leadData);
};
