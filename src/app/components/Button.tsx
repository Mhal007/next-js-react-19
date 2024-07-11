"use client"

type ButtonProps = {
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  const { onClick } = props;

  return (
    <button onClick={() => onClick()}>Click me</button>
  )
}