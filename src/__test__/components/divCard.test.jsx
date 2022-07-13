import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { NoticeProvider, noticeContext } from "../../providers/notices";
import DivCard from "../../components/divCards";
import * as API from "../../services/api";

const MockNotice = {
  energy: [
    {
      yoast_head_json: {
        title: "taesa-dividendo1",
        og_url: "https://conteudos.bloxs.com.br/taesa-dividendos",
        og_image:
          "https://conteudos.bloxs.com.br/wp-content/uploads/2022/05/taesa-dividendos-780x450.png",
        article_published_time: "2022-05-13T01:30:00",
      },
    },
    {
      yoast_head_json: {
        title: "taesa-dividendo2",
        og_url: "https://conteudos.bloxs.com.br/taesa-dividendos",
        og_image:
          "https://conteudos.bloxs.com.br/wp-content/uploads/2022/05/taesa-dividendos-780x450.png",
        article_published_time: "2022-05-13T01:30:00",
      },
    },
    {
      yoast_head_json: {
        title: "taesa-dividendo3",
        og_url: "https://conteudos.bloxs.com.br/taesa-dividendos",
        og_image:
          "https://conteudos.bloxs.com.br/wp-content/uploads/2022/05/taesa-dividendos-780x450.png",
        article_published_time: "2022-05-13T01:30:00",
      },
    },
  ],
  agro: [],
  loadEnergy: false,
  loadAgro: false,
  BeforePage: () => {},
  NextPage: () => {},
};

describe("Component DivCard", () => {
  test("check if component is redered", async () => {
    render(
      <noticeContext.Provider value={MockNotice}>
        <DivCard />
      </noticeContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByText("taesa-dividendo1")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("taesa-dividendo3")).toBeInTheDocument();
    });
  });
});
