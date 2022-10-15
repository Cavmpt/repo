import { useState } from "react";
// import EnglandFlag from "../../../Assets/Base64/EnglandFlag";
// import FrenchFlag from "../../../Assets/Base64/FrenchFlag";
import { RootState } from "../../../Store/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../Store/redux/slices/languageSlice";

export interface ILanguageButtonProps {}

export default function LanguageButton(props: ILanguageButtonProps) {
  // const [currentFlag, setCurrentFlag] = useState(EnglandFlag);
  const currentLanguage = useSelector(
    (state: RootState) => state.language.language,
  );
  const dispatch = useDispatch();
  const changeLanguage = () => {
    currentLanguage === "French"
      ? dispatch(setLanguage("English"))
      : dispatch(setLanguage("French"));
  };

  // const changeLanguage = () => {
  //   if (currentFlag !== FrenchFlag) {
  //     setCurrentFlag(FrenchFlag);
  //   }
  //   if (currentFlag !== EnglandFlag) {
  //     setCurrentFlag(EnglandFlag);
  //   }
  // };
  return (
    <button
      className="language-button"
      onClick={() => {
        changeLanguage();
      }}
    >
      {currentLanguage}
    </button>
  );
}
