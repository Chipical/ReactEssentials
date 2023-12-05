export default function Tabs(
  { children, buttons, ButtonsContainer = "menu" },
  ...props
) {
  //const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
