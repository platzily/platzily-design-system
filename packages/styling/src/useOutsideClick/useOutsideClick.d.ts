import React from 'react';

interface UseOutsideClickConfig {
  ref: React.Ref<any>;
  callback: () => void;
}

type EventState = 'offDocument' | 'onDocument'

export default function useOutsideClick(config: UseOutsideClickConfig): EventState;
