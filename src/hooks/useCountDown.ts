import { reactive } from 'vue';

type ButtonState = {
  text: string;
  disabled: boolean;
};

type ICountDown = {
  (time: number): {
    buttonState: ButtonState;
    startCount: () => void;
  };
};

const buttonState = reactive<ButtonState>({
  text: '获取验证码',
  disabled: false,
});

export const useCountDown: ICountDown = (time = 30) => {
  let timer: number;
  const startCount = () => {
    if (time > 0) {
      time--;
      buttonState.text = `${time}秒后重新获取`;
      buttonState.disabled = true;
      timer = setTimeout(() => {
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
