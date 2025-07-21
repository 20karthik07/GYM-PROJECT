// Dark Mode Toggle
document.getElementById('darkSwitch')?.addEventListener('change', e => {
  document.documentElement.setAttribute('data-theme', e.target.checked ? 'dark' : 'light');
});

// Sidebar Collapse
document.getElementById('toggleSidebar')?.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('collapsed');
});

// Subscribe Button
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const plan = button.getAttribute("data-plan");
    alert(`🎉 You have subscribed to the ${plan} plan!`);
  });
});
