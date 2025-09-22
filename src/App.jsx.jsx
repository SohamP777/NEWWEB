// Add these routes to your existing setup
<Routes>
  {/* ... other routes ... */}
  <Route path="/tools" element={
    <PrivateRoute>
      <ToolsPage />
    </PrivateRoute>
  } />
  <Route path="/settings" element={
    <PrivateRoute>
      <SettingsPage />
    </PrivateRoute>
  } />
</Routes>