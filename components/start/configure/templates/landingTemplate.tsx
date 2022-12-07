"use client";

import { useContext, useEffect } from "react";
import { ConfigTemplateContext } from "../../../../contexts/configTemplateContext";
import { uploadImage } from "../../../../utils";
import Icons from "../../../svgs";
import { ConfigSection } from "../configSite";

export function LandingTemplateConfigure() {
  const sections = 2;

  const { setTemplate, template } = useContext(ConfigTemplateContext);

  useEffect(() => {
    setTemplate((t: any) => ({
      ...t,
      sections: Array(sections)
        .fill(null)
        .map((_) => ({})),
    }));
  }, []);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate((t: any) => ({ ...t, title: e.target.value }));
  };

  const handleBackgroundChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files![0];
    const backgroundPicture = await uploadImage(file);
    setTemplate((t: any) => ({ ...t, backgroundPicture }));
  };

  const handleProfilePictureChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files![0];
    const profilePicture = await uploadImage(file);
    setTemplate((t: any) => ({ ...t, profilePicture }));
  };

  const handleSectionTitleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const sections = template.sections;
    sections[i].title = e.target.value;
    setTemplate((t: any) => ({ ...t, sections }));
  };

  const handleSectionDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const sections = template.sections;
    sections[i].description = e.target.value;
    setTemplate((t: any) => ({ ...t, sections }));
  };

  const handleSectionBackgroundChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    const file = e.target.files![0];
    const backgroundPicture = await uploadImage(file);

    const sections = template.sections;
    sections[i].backgroundPicture = backgroundPicture;
    setTemplate((t: any) => ({ ...t, sections }));
  };

  return (
    <>
      <ConfigSection
        description="basic informations about your website"
        title="Template configuration"
      >
        <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
          <label className="text-gray-300">Title</label>
          <input
            onChange={(e) => handleTitleChange(e)}
            className="w-full border-b outline-none  border-gray-500 bg-transparent text-white"
          />
        </div>
      </ConfigSection>

      <ConfigSection
        description="configure your website's images"
        title="Pictures"
      >
        <div className="mt-4 -mx-2 p-2 hover:bg-white/5 focus-within:bg-white/5 rounded-md">
          <label className="text-gray-300">Profile</label>
          <div className="w-full  bg-transparent text-white mt-2">
            <div className="flex relative items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
              {template.profilePicture && (
                <img
                  src={template.profilePicture}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <input
                onChange={(e) => handleProfilePictureChange(e)}
                type="file"
                accept="image/*"
                className="absolute  inset-0  opacity-0 cursor-pointer"
              />
              <div className="flex  items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
                <Icons.Image className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 -mx-2 p-2 hover:bg-white/5 focus-within:bg-white/5 rounded-md">
          <label className="text-gray-300">Background</label>
          <div className="w-full  bg-transparent text-white mt-2">
            <div className="flex relative items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
              {template.backgroundPicture && (
                <img
                  src={template.backgroundPicture}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              <input
                onChange={(e) => handleBackgroundChange(e)}
                type="file"
                accept="image/*"
                className="absolute  inset-0  opacity-0 cursor-pointer"
              />
              <div className="flex  items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
                <Icons.Image className="w-6 h-6 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </ConfigSection>

      {Array.from({ length: sections }, (_, i) => (
        <ConfigSection
          key={i}
          description="a section represents a page on your website"
          title={`Section ${i + 1}`}
        >
          <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
            <label className="text-gray-300">Title</label>
            <input
              onChange={(e) => handleSectionTitleChange(e, i)}
              className="w-full border-b outline-none  border-gray-500 bg-transparent text-white"
            />
          </div>

          <div className="mt-4 -mx-2 p-2 focus-within:bg-white/5 rounded-md">
            <label className="text-gray-300">Description</label>
            <input
              onChange={(e) => handleSectionDescriptionChange(e, i)}
              className="w-full border-b outline-none  border-gray-500 bg-transparent text-white"
            />
          </div>

          <div className="mt-4 -mx-2 p-2 hover:bg-white/5 focus-within:bg-white/5 rounded-md">
            <label className="text-gray-300">Background</label>
            <div className="w-full  bg-transparent text-white mt-2">
              <div className="flex relative items-center justify-center w-full h-32 border-2 border-gray-700 rounded-md">
                {template?.sections &&
                  template.sections[i].backgroundPicture && (
                    <img
                      src={template.sections[i].backgroundPicture}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}

                <input
                  onChange={(e) => handleSectionBackgroundChange(e, i)}
                  type="file"
                  accept="image/*"
                  className="absolute  inset-0  opacity-0 cursor-pointer"
                />
                <div className="flex  items-center justify-center w-20 h-20 rounded-full border-2 border-gray-700">
                  <Icons.Image className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </ConfigSection>
      ))}
    </>
  );
}
