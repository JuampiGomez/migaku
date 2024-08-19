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
      className={`${bg} ${borderColor} absolute border-2  -right-3 -bottom-2 w-[14px] h-[98.5%] box3dRight`}
    ></div>
  );
};

export const CardBorder3dBottom = ({
  bg,
  borderColor = "border-black",
}: Props) => {
  return (
    <div
      className={`${bg} ${borderColor} absolute  border-2 left-3 -bottom-2 w-[calc(100%-1px)] h-[14px] box3dBottom `}
    ></div>
  );
};

export const CardBorderLeftAndTop = () => {
  return (
    <>
      <div
        className={`bg-white dark:bg-[#2B2B60] absolute border border-black -left-0.5 bottom-1 w-[1px] h-[98.5%] `}
      ></div>
      <div
        className={`bg-white dark:bg-[#2B2B60] absolute border border-black -left-0.5 -top-0.5 w-full h-[1px] `}
      ></div>
    </>
  );
};
