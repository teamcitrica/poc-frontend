import Navbar from "@/shared/components/citrica-ui/organism/navbar";
import UIKitPage from "./components/ui-kit-page";

export const dynamic = 'force-dynamic'

export default async function UIKit() {
  return (
    <>
      <Navbar />
      <UIKitPage />
    </>
  );
}