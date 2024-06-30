import axiosInstance from "@/utils/axios";

const deleteMovieApi = async (movieId: string): Promise<any> => {
  const { data } = await axiosInstance.delete<boolean>(`movie/${movieId}`);
  return data;
};

export default deleteMovieApi;
