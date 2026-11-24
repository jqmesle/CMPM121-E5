import { hasCrate, type Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const filledGoals = puzzle.layout.goals.filter(
    (goal) => hasCrate(puzzle, goal),
  ).length;

  return <p>Goals filled: {filledGoals} of {puzzle.layout.goals.length}</p>;
}
