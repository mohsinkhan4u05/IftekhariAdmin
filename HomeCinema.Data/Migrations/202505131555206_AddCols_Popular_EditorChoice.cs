namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddCols_Popular_EditorChoice : DbMigration
    {
        public override void Up()
        {
            AddColumn("Iftekhari.Book", "Popular", c => c.Boolean(nullable: false));
            AddColumn("Iftekhari.Book", "EditorChoice", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("Iftekhari.Book", "EditorChoice");
            DropColumn("Iftekhari.Book", "Popular");
        }
    }
}
