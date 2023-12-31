import { useCallback, useEffect, useMemo } from "react";
import classes from "../components/Layout/Main Navigation/MainNavigation.module.scss";

const useStickyNav = (targetEl, options) => {
  const nav = document.querySelector(`.${classes.nav}`);

  const intersectionCallback = useCallback(
    (entries) => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        nav.classList.add(classes["nav__sticky"]);
        nav.classList.remove("container");
      } else {
        nav.classList.remove(classes["nav__sticky"]);
        nav.classList.add("container");
      }
    },
    [nav]
  );

  const intersectionOptions = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const stickyNavObserver = new IntersectionObserver(
      intersectionCallback,
      intersectionOptions
    );
    if (targetEl) stickyNavObserver.observe(targetEl);

    return () => {
      if (targetEl) stickyNavObserver.unobserve(targetEl);
    };
  }, [targetEl, options, intersectionCallback, intersectionOptions]);
};

export default useStickyNav;
