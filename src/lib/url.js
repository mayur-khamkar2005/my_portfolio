function decodeHashFragment(hash = "") {
  if (typeof hash !== "string") {
    return "";
  }

  const normalizedHash = hash.startsWith("#") ? hash.slice(1) : hash;

  if (!normalizedHash) {
    return "";
  }

  try {
    return decodeURIComponent(normalizedHash);
  } catch {
    return normalizedHash;
  }
}

function isSafeHref(
  href,
  { allowRelative = false, allowEmail = true, allowPhone = true } = {},
) {
  if (typeof href !== "string") {
    return false;
  }

  const value = href.trim();

  if (!value) {
    return false;
  }

  if (allowEmail && value.startsWith("mailto:")) {
    return true;
  }

  if (allowPhone && value.startsWith("tel:")) {
    return true;
  }

  if (allowRelative && value.startsWith("/")) {
    return true;
  }

  try {
    const parsedUrl = new URL(value);
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
  } catch {
    return false;
  }
}

function isSafeExternalHref(href) {
  return isSafeHref(href, {
    allowRelative: false,
    allowEmail: false,
    allowPhone: false,
  });
}

export { decodeHashFragment, isSafeExternalHref, isSafeHref };
