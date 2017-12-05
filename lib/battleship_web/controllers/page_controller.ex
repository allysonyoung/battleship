defmodule BattleshipWeb.PageController do
  use BattleshipWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def set_names(conn, %{"name" => name, "table" => table}) do
    conn
    |> put_session(:user_name, name)
    |> put_session(:table_name, table)
    |> redirect(to: page_path(conn, :index))
  end
end
