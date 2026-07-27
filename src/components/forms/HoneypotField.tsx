/**
 * Invisible spam-trap field. Genuine users never see or fill this in;
 * bots that auto-fill every field will, and the server rejects the
 * submission when it's non-empty.
 */
export function HoneypotField() {
  return (
    <div aria-hidden="true" className="absolute left-0 top-0 h-0 w-0 overflow-hidden opacity-0">
      <label htmlFor="companyWebsite">Website</label>
      <input
        id="companyWebsite"
        name="companyWebsite"
        type="text"
        tabIndex={-1}
        autoComplete="off"
      />
    </div>
  );
}
