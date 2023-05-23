// import axios, { AxiosResponse } from "axios";

export interface FeedbackRequest {
  name: string;
  registration: string;
  ease: number;
  overall: number;
  improvement: string;
}

interface SendFeedbackProps {
  request: FeedbackRequest;
  onSuccess: () => void;
  onError: (error: any) => void;
}

const sendFeedback = async ({
  request,
  onSuccess,
  onError,
}: SendFeedbackProps) => {
  try {
    // const response: AxiosResponse<any> = await axios.post(
    //   "/api/healthcare/manage/feedback",
    //   request
    // );
    onSuccess();
  } catch (error) {
    onError(error);
  }
};

export default sendFeedback;
