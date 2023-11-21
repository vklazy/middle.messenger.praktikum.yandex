export const tpl = `
  <div class="profile-input-row">
  <label class="input-field-label">{{ label }}</label>
  <input class="input-field" type="{{ type }}" name="{{ name }}" placeholder="{{ placeholder }}" value="{{ value }}">
  </div>
  <span class="invalid-feedback"><strong>{{ feedback }}</strong></span>
`;
