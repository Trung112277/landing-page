export function LogoImage() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}/image/logo.png`}
      alt="Logo"
      className="max-w-[100px] max-h-[40px]"
    />
  );
}
