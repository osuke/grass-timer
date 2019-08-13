export const START_TIMER = 'START_TIMER';
export const RESUME_TIMER = 'RESUME_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export interface Action {
  type: typeof START_TIMER |
        typeof RESUME_TIMER |
        typeof PAUSE_TIMER |
        typeof RESET_TIMER |
        typeof INCREMENT_TIMER;
}

export const startTimer = (): Action => ({
  type: START_TIMER,
});

export const resumeTimer = (): Action => ({
  type: RESUME_TIMER,
});

export const pauseTimer = (): Action => ({
  type: PAUSE_TIMER,
});

export const resetTimer = (): Action => ({
  type: RESET_TIMER,
});

export const incrementTimer = (): Action => ({
  type: INCREMENT_TIMER,
});
