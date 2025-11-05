# frozen_string_literal: true

class Api::HealthController < ApplicationController
  # If you enforce auth globally, skip it for health:
  # skip_before_action :require_logged_in, only: :show

  def show
    render json: { ok: true, time: Time.current.iso8601 }, status: :ok
  end
end
