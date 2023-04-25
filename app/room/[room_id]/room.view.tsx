"use client";
import { observer } from "mobx-react-lite";
import { useEffect, useMemo, useState } from "react";
import EnterScreen from "./screens/EnterScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import QuestionScreen from "./screens/QuestionScreen";
import cl from "./roomPage.module.scss";
import WaitingScreen from "./screens/WaitingScreen";
import { roomViewModel } from "./room.vm";
import { useViewModel } from "@/components/hooks/useViewModel";
import { Player } from "./types";

const RoomView = observer(({ roomId }: { roomId: any }) => {
  const vm = useMemo(() => new roomViewModel(roomId), [roomId]);

  useEffect(() => {
    console.log(vm.state ?? "no state", vm.question);
  }, [vm.state]);

  const onChooseAnswer = (id: number) => {
    if (vm.state !== "QUESTION") return;

    vm.selectAnswer(id);
  };

  const onNameEnter = (name: string) => {
    vm.enterGame(name);
  };

  return (
    <main style={{ display: "none" }} className={cl.roomPageWrapper}>
      {vm.state === "JOIN" && <EnterScreen onNameEnter={onNameEnter} />}
      {vm.state === "WAITING" && <WaitingScreen />}
      {/* question or answer */}
      {(vm.state === "ANSWER" || vm.state === "QUESTION") && (
        <QuestionScreen
          onChooseAnswer={onChooseAnswer}
          question={vm.question}
          selectedAnswerId={vm.selectedAnswerId}
          secondsLeft={vm.secondsLeft}
          correctAnswerId={vm.correctAnswerId}
          />
      )}
      {vm.state === "LEADERBOARD" && (
        <LeaderboardScreen
          questionNumber={vm.question?.number ?? 0}
          questionCount={vm.questionCount ?? 0}
          players={vm.leaderboard?.players ?? []}
          currentPlayer={vm.leaderboard?.currentPlayer ?? {
            name: "",
            place: 1,
            score: 0,
            scoreChange: 0
          }}
        />
      )}
    </main>
  );
});

export default RoomView;
