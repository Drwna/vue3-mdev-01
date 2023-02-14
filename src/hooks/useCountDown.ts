import { reactive } from 'vue';

type ButtonState = {
  text: string;
  disabled: boolean;
};

type ICountDown = {
  (time?: number): {
    buttonState: ButtonState;
    startCount: () => void;
  };
};

export const useCountDown: ICountDown = (time = 90) => {
  const buttonState = reactive<ButtonState>({
    text: '获取验证码',
    disabled: false,
  });
  let timer: number;
  const startCount = () => {
    if (time > 0) {
      time--;
      buttonState.text = `${time}秒后重新获取`;
      buttonState.disabled = true;
      timer = window.setTimeout(() => {
        startCount();
      }, 1000);
    } else {
      buttonState.text = '获取验证码';
      buttonState.disabled = false;
      clearTimeout(timer);
    }
  };
  return { buttonState, startCount };
};
