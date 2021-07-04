const useCustomEffect =
     typeof window === "undefined" ? useEffect : useLayoutEffect;

export default useCustomEffect;
