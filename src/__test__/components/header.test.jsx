import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Header from "../../components/header";
import useTheme, { ColorProvider, ColorContext } from "../../providers/theme";
import { ThemeProvider } from "styled-components";
import { themes } from "../../style/theme";

describe("Component Header", () => {
  test("should be able to render header", () => {
    render(<Header title={"test"} />);

    expect(screen.getByText(/test/)).toBeInTheDocument();
  });

  // test("should change colors", async () => {
  //   // const { currentTheme, setCurrentTheme, getOpositeTheme } =
  //   //   React.useContext(ColorContext);
  //   const { getOpositeTheme } = useTheme();
  //   const test = {
  //     currentTheme: "light",
  //   };
  //   const mockOposite = {
  //     getOpositeTheme: () => "dark",
  //   };

  //   render(
  //     <ColorContext.Provider value={{ test, mockOposite,setCurrentTheme }}>
  //       <ThemeProvider theme={themes[test.currentTheme]}>
  //         <Header title={"test"} />
  //       </ThemeProvider>
  //     </ColorContext.Provider>
  //   );

  //   fireEvent.click(screen.getByRole("button"));

  //   await waitFor(() => {
  //     expect(screen.getByText("test")).toHaveStyle("color: #171923");
  //   });
  // });
});
