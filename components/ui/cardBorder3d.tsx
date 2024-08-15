type Props = {
  bg: string;
  borderColor?: string;
};

export const CardBorder3dRight = ({
  bg,
  borderColor = "border-black",
}: Props) => {
  return (
    <div
      className={`${bg} ${borderColor} absolute border  -right-3 -bottom-2 w-[14px] h-[98.5%] box3dRight`}
    ></div>
  );
};

export const CardBorder3dBottom = ({
  bg,
  borderColor = "border-black",
}: Props) => {
  return (
    <div
      className={`${bg} ${borderColor} absolute   border  left-3 -bottom-2 w-[calc(100%-1px)] h-[14px] box3dBottom `}
    ></div>
  );
};
