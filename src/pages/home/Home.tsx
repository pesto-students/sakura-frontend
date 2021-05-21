import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../appStore/hooks";
import NamedSeparator from "../../components/NamedSeparator";
import Header from "../header";
import { getExclusivePromo } from "./home.slice";

export const Home = () => {
  const dispatch = useAppDispatch();
  const exclusiveEvents = useAppSelector((state) => state.home.exclusiveEvents);

  const carousalImages = [];

  useEffect(() => {
    dispatch(getExclusivePromo({}));
  }, []);

  useEffect(() => {

  }, [exclusiveEvents]);

  return (
    <div>
      <Header />
      {exclusiveEvents.map((event: any, indx: number) => {
        // return <NamedSeparator key={indx} title={category.title} />;
      })}
    </div>
  );
};
