import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../../components/card";

const mockNotice = {
  yoast_head_json: {
    title: "taesa-dividendo",
    og_url: "https://conteudos.bloxs.com.br/taesa-dividendos",
    og_image:
      "https://conteudos.bloxs.com.br/wp-content/uploads/2022/05/taesa-dividendos-780x450.png",
    article_published_time: "2022-05-13T01:30:00",
  },
};

describe("Component Card", () => {
  test("should be able to render", () => {
    render(<Card notice={mockNotice} />);

    const date = screen.getByText(/01:30/);

    expect(screen.getByText("taesa-dividendo")).toBeTruthy();
    expect(date).toBeInTheDocument();
  });
});
