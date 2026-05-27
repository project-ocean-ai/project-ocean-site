// Project Ocean site interactions will live here.
const SUPABASE_URL = "https://xjogbimjemrfmefnwgbb.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_wzG4DlbSfml_aLQEUSVc9g_monLTD34";

async function submitFounderAccess(email) {
  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/founder_access_requests`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          email: email,
          source: "website",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Submission failed");
    }

    alert("Founder access request received.");
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
}
