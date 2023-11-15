import {
  __toESM,
  require_react
} from "./chunk-FNE3RDCM.js";

// .yarn/__virtual__/jotai-virtual-ad410f3c07/2/AppData/Local/Yarn/Berry/cache/jotai-npm-2.5.1-5d13f04b9d-10c0.zip/node_modules/jotai/esm/vanilla.mjs
var keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString: () => key
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = function(get) {
      return get(this);
    };
    config.write = function(get, set, arg) {
      return set(
        this,
        typeof arg === "function" ? arg(get(this)) : arg
      );
    };
  }
  if (write) {
    config.write = write;
  }
  return config;
}
var hasInitialValue = (atom2) => "init" in atom2;
var isActuallyWritableAtom = (atom2) => !!atom2.write;
var cancelPromiseMap = /* @__PURE__ */ new WeakMap();
var registerCancelPromise = (promise, cancel) => {
  cancelPromiseMap.set(promise, cancel);
  promise.catch(() => {
  }).finally(() => cancelPromiseMap.delete(promise));
};
var cancelPromise = (promise, next) => {
  const cancel = cancelPromiseMap.get(promise);
  if (cancel) {
    cancelPromiseMap.delete(promise);
    cancel(next);
  }
};
var resolvePromise = (promise, value) => {
  promise.status = "fulfilled";
  promise.value = value;
};
var rejectPromise = (promise, e) => {
  promise.status = "rejected";
  promise.reason = e;
};
var isPromiseLike = (x) => typeof (x == null ? void 0 : x.then) === "function";
var isEqualAtomValue = (a, b) => !!a && "v" in a && "v" in b && Object.is(a.v, b.v);
var isEqualAtomError = (a, b) => !!a && "e" in a && "e" in b && Object.is(a.e, b.e);
var hasPromiseAtomValue = (a) => !!a && "v" in a && a.v instanceof Promise;
var isEqualPromiseAtomValue = (a, b) => "v" in a && "v" in b && a.v.orig && a.v.orig === b.v.orig;
var returnAtomValue = (atomState) => {
  if ("e" in atomState) {
    throw atomState.e;
  }
  return atomState.v;
};
var createStore = () => {
  const atomStateMap = /* @__PURE__ */ new WeakMap();
  const mountedMap = /* @__PURE__ */ new WeakMap();
  const pendingMap = /* @__PURE__ */ new Map();
  let storeListenersRev2;
  let mountedAtoms;
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
    storeListenersRev2 = /* @__PURE__ */ new Set();
    mountedAtoms = /* @__PURE__ */ new Set();
  }
  const getAtomState = (atom2) => atomStateMap.get(atom2);
  const setAtomState = (atom2, atomState) => {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      Object.freeze(atomState);
    }
    const prevAtomState = atomStateMap.get(atom2);
    atomStateMap.set(atom2, atomState);
    if (!pendingMap.has(atom2)) {
      pendingMap.set(atom2, prevAtomState);
    }
    if (hasPromiseAtomValue(prevAtomState)) {
      const next = "v" in atomState ? atomState.v instanceof Promise ? atomState.v : Promise.resolve(atomState.v) : Promise.reject(atomState.e);
      if (prevAtomState.v !== next) {
        cancelPromise(prevAtomState.v, next);
      }
    }
  };
  const updateDependencies = (atom2, nextAtomState, nextDependencies) => {
    const dependencies = /* @__PURE__ */ new Map();
    let changed = false;
    nextDependencies.forEach((aState, a) => {
      if (!aState && a === atom2) {
        aState = nextAtomState;
      }
      if (aState) {
        dependencies.set(a, aState);
        if (nextAtomState.d.get(a) !== aState) {
          changed = true;
        }
      } else if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
        console.warn("[Bug] atom state not found");
      }
    });
    if (changed || nextAtomState.d.size !== dependencies.size) {
      nextAtomState.d = dependencies;
    }
  };
  const setAtomValue = (atom2, value, nextDependencies) => {
    const prevAtomState = getAtomState(atom2);
    const nextAtomState = {
      d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
      v: value
    };
    if (nextDependencies) {
      updateDependencies(atom2, nextAtomState, nextDependencies);
    }
    if (isEqualAtomValue(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
      return prevAtomState;
    }
    if (hasPromiseAtomValue(prevAtomState) && hasPromiseAtomValue(nextAtomState) && isEqualPromiseAtomValue(prevAtomState, nextAtomState)) {
      if (prevAtomState.d === nextAtomState.d) {
        return prevAtomState;
      } else {
        nextAtomState.v = prevAtomState.v;
      }
    }
    setAtomState(atom2, nextAtomState);
    return nextAtomState;
  };
  const setAtomValueOrPromise = (atom2, valueOrPromise, nextDependencies, abortPromise) => {
    if (isPromiseLike(valueOrPromise)) {
      let continuePromise;
      const updatePromiseDependencies = () => {
        const prevAtomState = getAtomState(atom2);
        if (!hasPromiseAtomValue(prevAtomState) || prevAtomState.v !== promise) {
          return;
        }
        const nextAtomState = setAtomValue(
          atom2,
          promise,
          nextDependencies
        );
        if (mountedMap.has(atom2) && prevAtomState.d !== nextAtomState.d) {
          mountDependencies(atom2, nextAtomState, prevAtomState.d);
        }
      };
      const promise = new Promise((resolve, reject) => {
        let settled = false;
        valueOrPromise.then(
          (v) => {
            if (!settled) {
              settled = true;
              resolvePromise(promise, v);
              resolve(v);
              updatePromiseDependencies();
            }
          },
          (e) => {
            if (!settled) {
              settled = true;
              rejectPromise(promise, e);
              reject(e);
              updatePromiseDependencies();
            }
          }
        );
        continuePromise = (next) => {
          if (!settled) {
            settled = true;
            next.then(
              (v) => resolvePromise(promise, v),
              (e) => rejectPromise(promise, e)
            );
            resolve(next);
          }
        };
      });
      promise.orig = valueOrPromise;
      promise.status = "pending";
      registerCancelPromise(promise, (next) => {
        if (next) {
          continuePromise(next);
        }
        abortPromise == null ? void 0 : abortPromise();
      });
      return setAtomValue(atom2, promise, nextDependencies);
    }
    return setAtomValue(atom2, valueOrPromise, nextDependencies);
  };
  const setAtomError = (atom2, error, nextDependencies) => {
    const prevAtomState = getAtomState(atom2);
    const nextAtomState = {
      d: (prevAtomState == null ? void 0 : prevAtomState.d) || /* @__PURE__ */ new Map(),
      e: error
    };
    if (nextDependencies) {
      updateDependencies(atom2, nextAtomState, nextDependencies);
    }
    if (isEqualAtomError(prevAtomState, nextAtomState) && prevAtomState.d === nextAtomState.d) {
      return prevAtomState;
    }
    setAtomState(atom2, nextAtomState);
    return nextAtomState;
  };
  const readAtomState = (atom2, force) => {
    const atomState = getAtomState(atom2);
    if (!force && atomState) {
      if (mountedMap.has(atom2)) {
        return atomState;
      }
      if (Array.from(atomState.d).every(([a, s]) => {
        if (a === atom2) {
          return true;
        }
        const aState = readAtomState(a);
        return aState === s || isEqualAtomValue(aState, s);
      })) {
        return atomState;
      }
    }
    const nextDependencies = /* @__PURE__ */ new Map();
    let isSync = true;
    const getter = (a) => {
      if (a === atom2) {
        const aState2 = getAtomState(a);
        if (aState2) {
          nextDependencies.set(a, aState2);
          return returnAtomValue(aState2);
        }
        if (hasInitialValue(a)) {
          nextDependencies.set(a, void 0);
          return a.init;
        }
        throw new Error("no atom init");
      }
      const aState = readAtomState(a);
      nextDependencies.set(a, aState);
      return returnAtomValue(aState);
    };
    let controller;
    let setSelf;
    const options = {
      get signal() {
        if (!controller) {
          controller = new AbortController();
        }
        return controller.signal;
      },
      get setSelf() {
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom2)) {
          console.warn("setSelf function cannot be used with read-only atom");
        }
        if (!setSelf && isActuallyWritableAtom(atom2)) {
          setSelf = (...args) => {
            if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && isSync) {
              console.warn("setSelf function cannot be called in sync");
            }
            if (!isSync) {
              return writeAtom(atom2, ...args);
            }
          };
        }
        return setSelf;
      }
    };
    try {
      const valueOrPromise = atom2.read(getter, options);
      return setAtomValueOrPromise(
        atom2,
        valueOrPromise,
        nextDependencies,
        () => controller == null ? void 0 : controller.abort()
      );
    } catch (error) {
      return setAtomError(atom2, error, nextDependencies);
    } finally {
      isSync = false;
    }
  };
  const readAtom = (atom2) => returnAtomValue(readAtomState(atom2));
  const addAtom = (atom2) => {
    let mounted = mountedMap.get(atom2);
    if (!mounted) {
      mounted = mountAtom(atom2);
    }
    return mounted;
  };
  const canUnmountAtom = (atom2, mounted) => !mounted.l.size && (!mounted.t.size || mounted.t.size === 1 && mounted.t.has(atom2));
  const delAtom = (atom2) => {
    const mounted = mountedMap.get(atom2);
    if (mounted && canUnmountAtom(atom2, mounted)) {
      unmountAtom(atom2);
    }
  };
  const recomputeDependents = (atom2) => {
    const dependencyMap = /* @__PURE__ */ new Map();
    const dirtyMap = /* @__PURE__ */ new WeakMap();
    const getDependents = (a) => {
      var _a;
      const dependents = new Set((_a = mountedMap.get(a)) == null ? void 0 : _a.t);
      pendingMap.forEach((_, pendingAtom) => {
        var _a2;
        if ((_a2 = getAtomState(pendingAtom)) == null ? void 0 : _a2.d.has(a)) {
          dependents.add(pendingAtom);
        }
      });
      return dependents;
    };
    const loop1 = (a) => {
      getDependents(a).forEach((dependent) => {
        if (dependent !== a) {
          dependencyMap.set(
            dependent,
            (dependencyMap.get(dependent) || /* @__PURE__ */ new Set()).add(a)
          );
          dirtyMap.set(dependent, (dirtyMap.get(dependent) || 0) + 1);
          loop1(dependent);
        }
      });
    };
    loop1(atom2);
    const loop2 = (a) => {
      getDependents(a).forEach((dependent) => {
        var _a;
        if (dependent !== a) {
          let dirtyCount = dirtyMap.get(dependent);
          if (dirtyCount) {
            dirtyMap.set(dependent, --dirtyCount);
          }
          if (!dirtyCount) {
            let isChanged = !!((_a = dependencyMap.get(dependent)) == null ? void 0 : _a.size);
            if (isChanged) {
              const prevAtomState = getAtomState(dependent);
              const nextAtomState = readAtomState(dependent, true);
              isChanged = !isEqualAtomValue(prevAtomState, nextAtomState);
            }
            if (!isChanged) {
              dependencyMap.forEach((s) => s.delete(dependent));
            }
          }
          loop2(dependent);
        }
      });
    };
    loop2(atom2);
  };
  const writeAtomState = (atom2, ...args) => {
    let isSync = true;
    const getter = (a) => returnAtomValue(readAtomState(a));
    const setter = (a, ...args2) => {
      let r;
      if (a === atom2) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        const prevAtomState = getAtomState(a);
        const nextAtomState = setAtomValueOrPromise(a, args2[0]);
        if (!isEqualAtomValue(prevAtomState, nextAtomState)) {
          recomputeDependents(a);
        }
      } else {
        r = writeAtomState(a, ...args2);
      }
      if (!isSync) {
        const flushed = flushPending();
        if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
          storeListenersRev2.forEach(
            (l) => l({ type: "async-write", flushed })
          );
        }
      }
      return r;
    };
    const result = atom2.write(getter, setter, ...args);
    isSync = false;
    return result;
  };
  const writeAtom = (atom2, ...args) => {
    const result = writeAtomState(atom2, ...args);
    const flushed = flushPending();
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      storeListenersRev2.forEach(
        (l) => l({ type: "write", flushed })
      );
    }
    return result;
  };
  const mountAtom = (atom2, initialDependent, onMountQueue) => {
    var _a;
    const queue = onMountQueue || [];
    (_a = getAtomState(atom2)) == null ? void 0 : _a.d.forEach((_, a) => {
      const aMounted = mountedMap.get(a);
      if (aMounted) {
        aMounted.t.add(atom2);
      } else {
        if (a !== atom2) {
          mountAtom(a, atom2, queue);
        }
      }
    });
    readAtomState(atom2);
    const mounted = {
      t: new Set(initialDependent && [initialDependent]),
      l: /* @__PURE__ */ new Set()
    };
    mountedMap.set(atom2, mounted);
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      mountedAtoms.add(atom2);
    }
    if (isActuallyWritableAtom(atom2) && atom2.onMount) {
      const { onMount } = atom2;
      queue.push(() => {
        const onUnmount = onMount((...args) => writeAtom(atom2, ...args));
        if (onUnmount) {
          mounted.u = onUnmount;
        }
      });
    }
    if (!onMountQueue) {
      queue.forEach((f) => f());
    }
    return mounted;
  };
  const unmountAtom = (atom2) => {
    var _a;
    const onUnmount = (_a = mountedMap.get(atom2)) == null ? void 0 : _a.u;
    if (onUnmount) {
      onUnmount();
    }
    mountedMap.delete(atom2);
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      mountedAtoms.delete(atom2);
    }
    const atomState = getAtomState(atom2);
    if (atomState) {
      if (hasPromiseAtomValue(atomState)) {
        cancelPromise(atomState.v);
      }
      atomState.d.forEach((_, a) => {
        if (a !== atom2) {
          const mounted = mountedMap.get(a);
          if (mounted) {
            mounted.t.delete(atom2);
            if (canUnmountAtom(a, mounted)) {
              unmountAtom(a);
            }
          }
        }
      });
    } else if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      console.warn("[Bug] could not find atom state to unmount", atom2);
    }
  };
  const mountDependencies = (atom2, atomState, prevDependencies) => {
    const depSet = new Set(atomState.d.keys());
    prevDependencies == null ? void 0 : prevDependencies.forEach((_, a) => {
      if (depSet.has(a)) {
        depSet.delete(a);
        return;
      }
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.delete(atom2);
        if (canUnmountAtom(a, mounted)) {
          unmountAtom(a);
        }
      }
    });
    depSet.forEach((a) => {
      const mounted = mountedMap.get(a);
      if (mounted) {
        mounted.t.add(atom2);
      } else if (mountedMap.has(atom2)) {
        mountAtom(a, atom2);
      }
    });
  };
  const flushPending = () => {
    let flushed;
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      flushed = /* @__PURE__ */ new Set();
    }
    while (pendingMap.size) {
      const pending = Array.from(pendingMap);
      pendingMap.clear();
      pending.forEach(([atom2, prevAtomState]) => {
        const atomState = getAtomState(atom2);
        if (atomState) {
          const mounted = mountedMap.get(atom2);
          if (mounted && atomState.d !== (prevAtomState == null ? void 0 : prevAtomState.d)) {
            mountDependencies(atom2, atomState, prevAtomState == null ? void 0 : prevAtomState.d);
          }
          if (mounted && !// TODO This seems pretty hacky. Hope to fix it.
          // Maybe we could `mountDependencies` in `setAtomState`?
          (!hasPromiseAtomValue(prevAtomState) && (isEqualAtomValue(prevAtomState, atomState) || isEqualAtomError(prevAtomState, atomState)))) {
            mounted.l.forEach((listener) => listener());
            if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
              flushed.add(atom2);
            }
          }
        } else if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
          console.warn("[Bug] no atom state to flush");
        }
      });
    }
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      return flushed;
    }
  };
  const subscribeAtom = (atom2, listener) => {
    const mounted = addAtom(atom2);
    const flushed = flushPending();
    const listeners = mounted.l;
    listeners.add(listener);
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
      storeListenersRev2.forEach(
        (l) => l({ type: "sub", flushed })
      );
    }
    return () => {
      listeners.delete(listener);
      delAtom(atom2);
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
        storeListenersRev2.forEach((l) => l({ type: "unsub" }));
      }
    };
  };
  if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
    return {
      get: readAtom,
      set: writeAtom,
      sub: subscribeAtom,
      // store dev methods (these are tentative and subject to change without notice)
      dev_subscribe_store: (l, rev) => {
        if (rev !== 2) {
          throw new Error("The current StoreListener revision is 2.");
        }
        storeListenersRev2.add(l);
        return () => {
          storeListenersRev2.delete(l);
        };
      },
      dev_get_mounted_atoms: () => mountedAtoms.values(),
      dev_get_atom_state: (a) => atomStateMap.get(a),
      dev_get_mounted: (a) => mountedMap.get(a),
      dev_restore_atoms: (values) => {
        for (const [atom2, valueOrPromise] of values) {
          if (hasInitialValue(atom2)) {
            setAtomValueOrPromise(atom2, valueOrPromise);
            recomputeDependents(atom2);
          }
        }
        const flushed = flushPending();
        storeListenersRev2.forEach(
          (l) => l({ type: "restore", flushed })
        );
      }
    };
  }
  return {
    get: readAtom,
    set: writeAtom,
    sub: subscribeAtom
  };
};
var defaultStore;
if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production") {
  if (typeof globalThis.__NUMBER_OF_JOTAI_INSTANCES__ === "number") {
    ++globalThis.__NUMBER_OF_JOTAI_INSTANCES__;
  } else {
    globalThis.__NUMBER_OF_JOTAI_INSTANCES__ = 1;
  }
}
var getDefaultStore = () => {
  if (!defaultStore) {
    if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && globalThis.__NUMBER_OF_JOTAI_INSTANCES__ !== 1) {
      console.warn(
        "Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044"
      );
    }
    defaultStore = createStore();
  }
  return defaultStore;
};

// .yarn/__virtual__/jotai-virtual-ad410f3c07/2/AppData/Local/Yarn/Berry/cache/jotai-npm-2.5.1-5d13f04b9d-10c0.zip/node_modules/jotai/esm/react.mjs
var import_react = __toESM(require_react(), 1);
var StoreContext = (0, import_react.createContext)(void 0);
var useStore = (options) => {
  const store = (0, import_react.useContext)(StoreContext);
  return (options == null ? void 0 : options.store) || store || getDefaultStore();
};
var Provider = ({
  children,
  store
}) => {
  const storeRef = (0, import_react.useRef)();
  if (!store && !storeRef.current) {
    storeRef.current = createStore();
  }
  return (0, import_react.createElement)(
    StoreContext.Provider,
    {
      value: store || storeRef.current
    },
    children
  );
};
var isPromiseLike2 = (x) => typeof (x == null ? void 0 : x.then) === "function";
var use = import_react.default.use || ((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    promise.status = "pending";
    promise.then(
      (v) => {
        promise.status = "fulfilled";
        promise.value = v;
      },
      (e) => {
        promise.status = "rejected";
        promise.reason = e;
      }
    );
    throw promise;
  }
});
function useAtomValue(atom2, options) {
  const store = useStore(options);
  const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, import_react.useReducer)(
    (prev) => {
      const nextValue = store.get(atom2);
      if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
        return prev;
      }
      return [nextValue, store, atom2];
    },
    void 0,
    () => [store.get(atom2), store, atom2]
  );
  let value = valueFromReducer;
  if (storeFromReducer !== store || atomFromReducer !== atom2) {
    rerender();
    value = store.get(atom2);
  }
  const delay = options == null ? void 0 : options.delay;
  (0, import_react.useEffect)(() => {
    const unsub = store.sub(atom2, () => {
      if (typeof delay === "number") {
        setTimeout(rerender, delay);
        return;
      }
      rerender();
    });
    rerender();
    return unsub;
  }, [store, atom2, delay]);
  (0, import_react.useDebugValue)(value);
  return isPromiseLike2(value) ? use(value) : value;
}
function useSetAtom(atom2, options) {
  const store = useStore(options);
  const setAtom = (0, import_react.useCallback)(
    (...args) => {
      if ((import.meta.env ? import.meta.env.MODE : void 0) !== "production" && !("write" in atom2)) {
        throw new Error("not writable atom");
      }
      return store.set(atom2, ...args);
    },
    [store, atom2]
  );
  return setAtom;
}
function useAtom(atom2, options) {
  return [
    useAtomValue(atom2, options),
    // We do wrong type assertion here, which results in throwing an error.
    useSetAtom(atom2, options)
  ];
}
export {
  Provider,
  atom,
  createStore,
  getDefaultStore,
  useAtom,
  useAtomValue,
  useSetAtom,
  useStore
};
//# sourceMappingURL=jotai.js.map
