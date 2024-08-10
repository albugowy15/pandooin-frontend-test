export type ApiResponse<TData> = {
  success: boolean;
  message: string;
  code: number;
  data: TData;
};
