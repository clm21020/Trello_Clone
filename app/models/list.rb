# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string(255)      not null
#  board_id   :integer          not null
#  ord        :float            default(0.0)
#  created_at :datetime
#  updated_at :datetime
#

class List < ActiveRecord::Base
  validates :title, :board, :ord, presence: true

  belongs_to :board
  has_many :cards, dependent: :destroy

  default_scope { order(:ord) }

  after_initialize :ensure_ord

  @@ord = 0

  attr_accessor :ord

  def reset_ord(new_ord)
    self.ord = new_ord
  end

  def ensure_ord
    if !(self.ord)
      self.ord = @@ord.to_f
      @@ord += 1
    end
  end

  # TODO: class method for updating orders?
end
