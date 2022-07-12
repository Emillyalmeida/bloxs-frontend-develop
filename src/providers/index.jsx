import { NoticeProvider } from "./notices";
import { ColorProvider } from "./theme";

const Providers = ({ children }) => {
  return (
    <ColorProvider>
      <NoticeProvider>{children}</NoticeProvider>;
    </ColorProvider>
  );
};

export default Providers;
