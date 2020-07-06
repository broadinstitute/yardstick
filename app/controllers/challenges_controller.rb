class ChallengesController < ApplicationController
  def index
    @challenges = Challenge.all
  end

  def show
    @challenge = Challenge.find(params[:id])
  end

  private
    def challenge_params
      params.fetch(:challenge, {})
    end
end
