import ItamWatermark from "@/components/ui/watermarks/ItamWatermark";
import cl from "./roomPage.module.scss";
import BoxAnimation from "@/components/ui/loaders/BoxAnimation";
import { Suspense } from "react";

const WaitingScreen = () => {
  return (
    <>
      <div className={cl.waitingScreenWrapper}>
        <div className={cl.body}>
          <h1 className={cl.waitingScreenHeader}>Ждём остальных игроков 👀</h1>
          <div className={cl.waitingAnimation}>
            <Suspense>
              <BoxAnimation size={100} />
            </Suspense>
          </div>
        </div>
        <ItamWatermark />
      </div>
    </>
  );
};

export default WaitingScreen;
