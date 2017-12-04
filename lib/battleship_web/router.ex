defmodule BattleshipWeb.Router do
  use BattleshipWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_user
    plug :fetch_table
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", BattleshipWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    post "/name", PageController, :name
    post "/table", PageController, :table
  end

  # Other scopes may use custom stacks.
  # scope "/api", BattleshipWeb do
  #   pipe_through :api
  # end

  def fetch_user(conn, _opts) do
    user = get_session(conn, :user)
    if user do
      token = Phoenix.Token.sign(BattleshipWeb.Endpoint, "user_name", user)
      conn
      |> assign(:user_name, user)
      |> assign(:user_token, token)
    else
      conn
      |> assign(:user_name, nil)
      |> assign(:user_token, nil)
    end
  end

  def fetch_table(conn, _opts) do
    table = get_session(conn, :table)
    if table do
      conn
      |> assign(:table_name, table)
    else
      conn
      |> assign(:table_name, nil)
    end
  end
end
