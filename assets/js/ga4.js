export const sendGA4Events = ({ campaign, measurementId, apiSecretKey, ga4ClientId }) => {
  const GA4_CLIENT_ID = ga4ClientId || Math.random().toString(36).substring(7);
  const ANALYTICS_ID = measurementId || "G-7PNZ5E4JDZ";
  const API_SECRET = apiSecretKey || "RU0cCzDxRbCbpV6xOZ7xQA";

  async function sendGA4Event(name, action, label) {
    return await fetch(
      `https://www.google-analytics.com/mp/collect?measurement_id=${ANALYTICS_ID}&api_secret=${API_SECRET}`,
      {
        method: "POST",
        body: JSON.stringify({
          client_id: GA4_CLIENT_ID,
          events: [
            {
              name: action,
              params: {
                event_category: name,
                event_label: label,
              },
            },
          ],
        })
      }
    );
  }

  function pushEvent(action, label) {
    console.debug("pushEvent", { label, campaign, action });

    sendGA4Event(campaign, action, label)
      .then((data) => {
        console.debug("sendGA4Events", data.status);
      })
      .catch((e) => console.error(e));
  }

  return {
    pushEvent,
    sendItemImpression: (label) => pushEvent("item_impression", `impression:${label}`),
    sendItemClick: (label) => pushEvent("item_impression", `click:${label}`)
  };
};

/**
 * Example Usage:
 * const { sendItemImpression, sendItemClick } = sendGA4Events({ campaign: "bundle-lines-bunaltan-sicaklar-20240713" });
 *
 * Click:
 * ...
 * <button onClick={() => sendItemClick("visit_ad")}>Go To Ad</button>
 *
 * Impression:
 * ...
 * document.addEventListener("DOMContentLoaded", (event) => {
 *   sendItemImpression("homepage");
 * });
 */
