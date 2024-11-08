import { readPostsByUser } from "../../api/post/read";
import { readProfile } from "../../api/profile/read";
import { makeHeader } from "../../ui/global/header";
import { makeAPost } from "../../ui/post/makePost";
import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";

// const form = document.forms.updateProfile;

authGuard();

const header = document.querySelector("header");
makeHeader(header);
/**
 * Fetches the logged in user info and Creates the HTML for profile page
 *
 * @example
 * ```js
 * readProfileInfo()
 * ```
 */
const readProfileInfo = async () => {
  const username = JSON.parse(localStorage.getItem("userInfo"));

  const data = await readProfile(username.name);
  const userPosts = await readPostsByUser(username.name);

  const bannerDiv = document.getElementById("profileBanner");
  const profileImageDiv = document.getElementById("profileImage");
  const nameDiv = document.getElementById("username");
  const bioDiv = document.getElementById("bio");

  const banner = document.createElement("img");
  banner.src = data.banner.url;
  banner.alt = data.banner.alt;
  banner.className = "object-cover w-full h-full";

  const profileImage = document.createElement("img");
  profileImage.src = data.avatar.url;
  profileImage.alt = data.avatar.alt;
  profileImage.className = "rounded-md border-white border-4";

  const name = document.createElement("h2");
  name.innerText = data.name;
  name.className = "text-3xl text-white font-semibold";

  const bio = document.createElement("p");
  bio.innerText = data.bio;
  bio.className = "text-xl text-white font-semibold";

  bannerDiv.appendChild(banner);
  profileImageDiv.appendChild(profileImage);
  nameDiv.appendChild(name);
  bioDiv.appendChild(bio);

  userPosts.forEach((post) => {
    makeAPost(post, "userPosts");
  });
};

const makeEditProfile = () => {
  const profile = JSON.parse(localStorage.getItem("userInfo"));

  const form = document.getElementById("userProfileForm");
  form.addEventListener("submit", onUpdateProfile);

  const profileImageText = document.createElement("p");
  profileImageText.innerText = "Profile Picture";
  profileImageText.className = "text-2xl text-white font-semibold";

  const profileImgInput = document.createElement("input");
  profileImgInput.type = "url";
  profileImgInput.name = "avatarUrl";
  profileImgInput.className = "formInputOne";
  profileImgInput.placeholder = "Insert image url here...";
  profileImgInput.value = profile.avatar.url;

  const coverImgText = document.createElement("p");
  coverImgText.innerText = "Cover Picture";
  coverImgText.className = "text-2xl text-white font-semibold mt-4";

  const coverImgInput = document.createElement("input");
  coverImgInput.type = "url";
  coverImgInput.name = "bannerUrl";
  coverImgInput.className = "formInputOne";
  coverImgInput.placeholder = "Insert Image Url...";
  coverImgInput.value = profile.banner.url;

  const bioText = document.createElement("p");
  bioText.innerText = "Bio";
  bioText.className = "text-2xl text-white font-semibold mt-4";

  const textArea = document.createElement("textArea");
  textArea.name = "bio";
  textArea.className = "formInputTwo";
  textArea.placeholder = "Write your bio here...";
  if (profile.bio) {
    textArea.innerHTML = `${profile.bio}`;
  }

  const submit = document.createElement("button");
  submit.innerText = "Update Profile";
  submit.className = "buttonEffect text-blue text-3xl my-4 font-bold";
  submit.type = "submit";

  form.append(
    profileImageText,
    profileImgInput,
    coverImgText,
    coverImgInput,
    bioText,
    textArea,
    submit
  );
};

readProfileInfo();
makeEditProfile();
