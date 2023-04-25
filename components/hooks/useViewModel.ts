import { useEffect, useState } from "react";

interface DisposableVm {
  dispose(): void;
}

export function useViewModel<T extends DisposableVm>(_vm: T): T | null {
  const [vm, setVm] = useState<T>();
  useEffect(() => {
    setVm(_vm);
    return () => {
      _vm.dispose();
    };
  }, []);
  return vm ?? null;
}
