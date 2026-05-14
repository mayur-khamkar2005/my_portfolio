import { useEffect, useMemo, useRef, useState } from "react";
import useRevealAnimation from "../hooks/useRevealAnimation";

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(squares) {
  for (const line of winningLines) {
    const [first, second, third] = line;

    if (
      squares[first] &&
      squares[first] === squares[second] &&
      squares[first] === squares[third]
    ) {
      return { winner: squares[first], line };
    }
  }

  return null;
}

function getNow() {
  return typeof performance !== "undefined" ? performance.now() : Date.now();
}

function TicTacToeGame() {
  const [squares, setSquares] = useState(() => Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [scoreboard, setScoreboard] = useState({
    X: 0,
    O: 0,
    draws: 0,
  });

  const winnerData = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = !winnerData && squares.every(Boolean);

  const handleSquareClick = (index) => {
    if (squares[index] || winnerData || isDraw) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[index] = currentPlayer;

    const nextWinner = calculateWinner(nextSquares);
    const nextDraw = !nextWinner && nextSquares.every(Boolean);

    setSquares(nextSquares);

    if (nextWinner) {
      setScoreboard((currentScoreboard) => ({
        ...currentScoreboard,
        [nextWinner.winner]: currentScoreboard[nextWinner.winner] + 1,
      }));
      return;
    }

    if (nextDraw) {
      setScoreboard((currentScoreboard) => ({
        ...currentScoreboard,
        draws: currentScoreboard.draws + 1,
      }));
      return;
    }

    setCurrentPlayer((player) => (player === "X" ? "O" : "X"));
  };

  const resetBoard = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer("X");
  };

  const resetAll = () => {
    resetBoard();
    setScoreboard({ X: 0, O: 0, draws: 0 });
  };

  const statusLabel = winnerData
    ? `${winnerData.winner} wins this round.`
    : isDraw
      ? "It is a draw. Start another round."
      : `${currentPlayer} goes next.`;

  return (
    <article className="surface-card-strong p-5 sm:p-6 lg:p-7" data-reveal>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow">Classic</p>
          <h2 className="mt-3 font-display text-xl font-semibold text-text-primary sm:text-2xl">
            Tic-Tac-Toe
          </h2>
        </div>
        <span className="rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
          2 Players
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-text-muted" aria-live="polite">
        {statusLabel}
      </p>

      <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3">
        {squares.map((square, index) => {
          const isWinningSquare = winnerData?.line.includes(index);

          return (
            <button
              key={`square-${index}`}
              type="button"
              className={`aspect-square min-h-[4rem] rounded-2xl border text-xl font-semibold transition-[border-color,background-color,color,transform] duration-200 sm:min-h-[4.75rem] sm:text-2xl ${
                isWinningSquare
                  ? "border-accent bg-accent-soft text-accent"
                  : square
                    ? "bg-background text-text-primary"
                    : "game-board-cell-idle bg-background text-text-muted"
              }`}
              onClick={() => handleSquareClick(index)}
              aria-label={`Play ${currentPlayer} at position ${index + 1}`}
              disabled={Boolean(square) || Boolean(winnerData) || isDraw}
            >
              {square ?? ""}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.06em] text-text-muted">Player X</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {scoreboard.X}
          </p>
        </div>
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.06em] text-text-muted">Player O</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {scoreboard.O}
          </p>
        </div>
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.06em] text-text-muted">Draws</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {scoreboard.draws}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" className="primary-link w-full sm:w-auto" onClick={resetBoard}>
          Play Again
        </button>
        <button type="button" className="ghost-link w-full sm:w-auto" onClick={resetAll}>
          Reset Score
        </button>
      </div>
    </article>
  );
}

function ReactionGame() {
  const [phase, setPhase] = useState("idle");
  const [lastTime, setLastTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const timeoutRef = useRef(null);
  const startTimeRef = useRef(null);

  const clearPendingRound = () => {
    if (!timeoutRef.current) {
      return;
    }

    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  };

  const startRound = () => {
    clearPendingRound();
    startTimeRef.current = null;
    setPhase("waiting");

    const delay = 1400 + Math.floor(Math.random() * 1800);
    timeoutRef.current = window.setTimeout(() => {
      startTimeRef.current = getNow();
      setPhase("ready");
      timeoutRef.current = null;
    }, delay);
  };

  const handlePadClick = () => {
    if (phase === "waiting") {
      clearPendingRound();
      setPhase("too-soon");
      return;
    }

    if (phase !== "ready") {
      return;
    }

    const reactionTime = Math.max(0, Math.round(getNow() - (startTimeRef.current ?? getNow())));

    setLastTime(reactionTime);
    setBestTime((currentBest) =>
      currentBest === null ? reactionTime : Math.min(currentBest, reactionTime),
    );
    setRoundsPlayed((currentRounds) => currentRounds + 1);
    setPhase("result");
  };

  const resetReactionStats = () => {
    clearPendingRound();
    startTimeRef.current = null;
    setPhase("idle");
    setLastTime(null);
    setBestTime(null);
    setRoundsPlayed(0);
  };

  useEffect(() => clearPendingRound, []);

  const statusMessage =
    phase === "waiting"
      ? "Wait for the signal. If you tap early, the round resets."
      : phase === "ready"
        ? "Tap now."
        : phase === "result"
          ? `Nice. Your latest reaction time is ${lastTime} ms.`
          : phase === "too-soon"
            ? "Too soon. Try again and wait for the signal."
            : "Start a round, stay ready, and tap as fast as you can.";

  const padClassName =
    phase === "ready"
      ? "border-accent bg-accent-soft text-accent"
      : phase === "waiting"
        ? "border-line bg-background text-text-muted"
        : "border-line bg-background text-text-primary";

  return (
    <article className="surface-card-strong p-5 sm:p-6 lg:p-7" data-reveal>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="eyebrow">Speed Test</p>
          <h2 className="mt-3 font-display text-xl font-semibold text-text-primary sm:text-2xl">
            Reaction Sprint
          </h2>
        </div>
        <span className="rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-[0.06em] text-text-muted">
          Fastest Tap
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-text-muted" aria-live="polite">
        {statusMessage}
      </p>

      <button
        type="button"
        className={`mt-6 flex min-h-[12rem] w-full items-center justify-center rounded-3xl border px-4 text-center transition-[border-color,background-color,color,transform] duration-200 sm:min-h-[14rem] ${padClassName}`}
        onClick={handlePadClick}
        aria-label="Reaction game pad"
      >
        <span className="px-4 font-display text-xl font-semibold sm:px-6 sm:text-2xl">
          {phase === "ready"
            ? "Tap!"
            : phase === "waiting"
              ? "Wait..."
              : phase === "result"
                ? `${lastTime} ms`
                : phase === "too-soon"
                  ? "Too Soon"
                  : "Ready?"}
        </span>
      </button>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.06em] text-text-muted">Best</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {bestTime === null ? "--" : `${bestTime} ms`}
          </p>
        </div>
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.06em] text-text-muted">Latest</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {lastTime === null ? "--" : `${lastTime} ms`}
          </p>
        </div>
        <div className="surface-card p-4">
          <p className="text-xs uppercase tracking-[0.06em] text-text-muted">Rounds</p>
          <p className="mt-2 font-display text-2xl font-semibold text-text-primary">
            {roundsPlayed}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button type="button" className="primary-link w-full sm:w-auto" onClick={startRound}>
          {phase === "waiting" ? "Restart Round" : "Start"}
        </button>
        <button
          type="button"
          className="ghost-link w-full sm:w-auto"
          onClick={resetReactionStats}
        >
          Reset Stats
        </button>
      </div>
    </article>
  );
}

function HomeMiniGames() {
  const sectionRef = useRevealAnimation({ y: 26, stagger: 0.1 });

  return (
    <section
      id="mini-games"
      ref={sectionRef}
      className="section-shell scroll-mt-28 pb-14 sm:pb-20 lg:pb-24"
    >
      <div className="max-w-3xl" data-reveal>
        <p className="eyebrow">Just For Fun</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-[2.8rem]">
          I added a couple of small games here.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-muted sm:text-lg">
          I didn't want the home page to feel too plain, so I added these small
          games just to make the site feel a little more personal.
        </p>
      </div>

      <div className="mt-10 grid gap-5 xl:grid-cols-2">
        <TicTacToeGame />
        <ReactionGame />
      </div>
    </section>
  );
}

export default HomeMiniGames;
