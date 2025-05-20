export function depositHandler({ onLoadingChange, onErrorChange, onSuccess }) {
  let isLoading = false;
  let error = null;

  async function deposit(accountNumber, depositAmount) {
    isLoading = true;
    error = null;
    onLoadingChange(isLoading);
    onErrorChange(null);

    const user = JSON.parse(localStorage.getItem("user"));
    const token = user?.token;
    console.log(user)

    try {
      const response = await fetch("http://localhost:4000/api/transactions/deposit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({accountNumber, depositAmount}),
      });

      const json = await response.json(); // Now it's defined properly

      if (!response.ok) {
        throw new Error(json.error || "Deposit Failed");
      }

      isLoading = false;
      onLoadingChange(isLoading);
      onSuccess(json);
      console.log(json);
    } catch (err) {
      isLoading = false;
      error = err.message || "Network error";
      onLoadingChange(isLoading);
      onErrorChange(error);
      console.error(error);
    }
  }

  return { deposit };
}
