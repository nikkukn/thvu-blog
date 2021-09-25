import React, { useState } from "react";
import { mutate } from "swr";
import ErrorMessage from "../ErrorMessage";
import SuccessMessage from "../SuccessMessage";
import { Skill } from "@/lib/types/skill";
import LoadingSpinner from "../LoadingSpinner";
import ArrowButton from "./arrow-up-circle.svg";

enum STATE {
  INITIAL,
  LOADING,
  ERROR,
  SUCCESS,
}

interface Props {
  skill: Skill;
  user: {
    email?: string;
    name?: string;
  };
}

export default function SkillCard({ skill, user }: Props) {
  const [state, setState] = useState<STATE>(STATE.INITIAL);
  async function onEndorse(skillId: string) {
    setState(STATE.LOADING);
    const res = await fetch("/api/endorsement", {
      body: JSON.stringify({
        skillId,
        endorseBy: user?.name,
        email: user?.email || "not@provided.com",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      setState(STATE.ERROR);
      return;
    }
    mutate("/api/skill");
    setState(STATE.SUCCESS);
  }

  return (
    <div className="mb-4">
      <button
        className="flex items-center text-md rounded-lg px-2 py-1 font-semibold text-white bg-primary-400 dark:bg-primary-600 hover:bg-gray-700 disabled:bg-gray-700 dark:hover:bg-gray-600 dark:disabled:bg-gray-600 disabled:hover:cursor-not-allowed"
        onClick={() => onEndorse(skill.id)}
        disabled={!Boolean(user) || state === STATE.SUCCESS}
      >
        {state === STATE.LOADING ? (
          <LoadingSpinner />
        ) : (
          <ArrowButton className="inline stroke-current mr-1" />
        )}
        {skill.name}
      </button>
      {skill.people.length > 0 && (
        <span>
          <strong>{skill.people.length}</strong>{" "}
          {`Endorsement${skill.people.length > 1 ? "s" : ""}`} from{" "}
          <span>{skill.people.join(", ")}</span>
        </span>
      )}
      {state === STATE.ERROR && <ErrorMessage>An unexpected error occurred.</ErrorMessage>}
      {state === STATE.SUCCESS && (
        <SuccessMessage>{`Thank you for your endorsement on ${skill.name}!`}</SuccessMessage>
      )}
    </div>
  );
}
