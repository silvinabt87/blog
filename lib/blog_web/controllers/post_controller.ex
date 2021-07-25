defmodule BlogWeb.PostController do
  use BlogWeb, :controller

  alias Blog.Blogging
  alias Blog.Blogging.Post

  action_fallback BlogWeb.FallbackController

  def index(conn, _params) do
    posts = Blogging.list_posts()
    render(conn, "index.json", posts: posts)
  end

  def create(conn, %{"post" => post_params}) do
    with {:ok, %Post{} = post} <- Blogging.create_post(post_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.post_path(conn, :show, post))
      |> render("show.json", post: post)
    end
  end

  def show(conn, %{"id" => id}) do
    post = Blogging.get_post!(id)
    render(conn, "show.json", post: post)
  end

  def update(conn, %{"id" => id, "post" => post_params}) do
    post = Blogging.get_post!(id)

    with {:ok, %Post{} = post} <- Blogging.update_post(post, post_params) do
      render(conn, "show.json", post: post)
    end
  end

  def delete(conn, %{"id" => id}) do
    post = Blogging.get_post!(id)

    with {:ok, %Post{}} <- Blogging.delete_post(post) do
      send_resp(conn, :no_content, "")
    end
  end
end
