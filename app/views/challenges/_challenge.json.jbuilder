# frozen_string_literal: true

json.extract! challenge, :id, :created_at, :updated_at

json.url challenge_url(challenge, format: :json)
