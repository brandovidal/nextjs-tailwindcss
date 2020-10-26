import Link from "next/link";
import Welcome from "../components/Welcome";
import Services from "../components/Services";

export default function IndexPage() {
  return (
    <div>
      <Services />
      <Welcome />
    </div>
  );
}
