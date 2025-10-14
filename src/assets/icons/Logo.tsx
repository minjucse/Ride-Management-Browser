
import logo from "@/assets/logo.png"; // ✅ adjust path if needed

export default function Logo() {
  return (
    <img
      src={logo}
      alt="Logo"
      width={50}
      height={20}
      className="object-contain"
    />
  );
}
