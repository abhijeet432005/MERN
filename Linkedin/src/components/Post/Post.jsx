import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiVideo } from "react-icons/bi";
import { BsImageFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { isDraft } from "@reduxjs/toolkit";
import { Syncpost } from "../../stores/actions/PostActions";
// import { post } from "../../stores/actions/PostActions";

const Post = ({ closeHandler }) => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user);
  const [preview, setPreview] = useState(null);
  const [videoLink, setvideoLink] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [show, setshow] = useState("none");
  const [showType, setShowType] = useState(null);

  const ShowMe = (type) => {
    if (showType === type) {
      setShowType(null);
      setshow("none");
    } else {
      setShowType(type);
      setshow("block");
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (data) => {
    const { image, ...rest } = data;
    const Post = {
      ...rest,
      name: user.name,
      email: user.email,
      imageFile,
      imagePreview: preview,
      videoPreview: videoLink
    }
    dispatch(Syncpost(Post))
    reset();
    setvideoLink(null)
    setPreview(null);
    closeHandler();
  };

  // jab user image select kare to uska preview show karo
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
      setImageFile(file)
    }
  };

  const handleVideoChange = (e) => {
    const url = e.target.value;
    setvideoLink(url);
  };

  return (
    <div
      className="fixed inset-0 z-999 bg-black/50 flex items-center justify-center p-4"
      onClick={closeHandler}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-5 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()} // stop modal close on inner click
      >
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex gap-3">
            <img
              src={user?.photo}
              alt="user"
              className="w-14 h-14 object-cover rounded-full"
            />
            <div>
              <h1 className="text-2xl">{user?.name}</h1>
              <h1 className="leading-3 text-gray-500">Post to Anyone</h1>
            </div>
          </div>
          <div
            className="font-extrabold text-xl cursor-pointer"
            onClick={closeHandler}
          >
            ╳
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="flex flex-col gap-3"
        >
          <textarea
            className="w-full bg-gray-100 rounded-2xl resize-none p-3"
            rows={6}
            placeholder="What do you want to talk about?"
            {...register("caption", { required: true })}
          ></textarea>
          {errors.caption && (
            <span className="text-red-500 text-sm">Caption is required!</span>
          )}

          {/* video Upload  */}

          {showType === "video" && (
            <>
              <input
                type="url"
                {...register("video")}
                placeholder="Enter video link here"
                onChange={handleVideoChange}
                className="bg-gray-100 border border-gray-300 w-full rounded-xl p-2 cursor-pointer"
              />
              {videoLink && (
                <ReactPlayer width="100%" url={videoLink} controls />
              )}
            </>
          )}

          {/* Image Upload */}
          {showType === "image" && (
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              onChange={handleImageChange}
              className="bg-gray-100 border border-gray-300 w-full rounded-xl p-2 cursor-pointer"
              style={{ display: `${show}` }}
            />
          )}

          {/* Image Preview */}
          {preview && (
            <div className="relative mt-3">
              <img
                src={preview}
                alt="Preview"
                className="rounded-xl w-full object-cover max-h-[300px]"
              />
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute top-2 right-2 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
          )}

          {/* Post Button */}
          <div className="flex items-center flex-row-reverse justify-between">
            <button
              type="submit"
              className="mt-2 px-5 py-2 bg-blue-500 text-white rounded-full self-end hover:bg-blue-600 transition"
            >
              Post
            </button>

            <div className="flex gap-3">
              <p
                onClick={(e) => ShowMe("image")}
                className="text-2xl border bg-gray-100 p-2 rounded-2xl"
              >
                <BsImageFill />
              </p>
              <p
                onClick={(e) => ShowMe("video")}
                className="text-2xl border bg-gray-100 p-2 rounded-2xl"
              >
                <BiVideo />
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
