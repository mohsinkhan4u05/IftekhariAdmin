namespace Iftekhari.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddTblConfiguration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Iftekhari.Category",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                    })
                .PrimaryKey(t => t.ID);
            
            AddColumn("Iftekhari.Book", "BookId", c => c.String());
            AddColumn("Iftekhari.Book", "Language", c => c.String());
            AddColumn("Iftekhari.Book", "CategoryId", c => c.Int());
            CreateIndex("Iftekhari.Book", "CategoryId");
            AddForeignKey("Iftekhari.Book", "CategoryId", "Iftekhari.Category", "ID");
        }
        
        public override void Down()
        {
            DropForeignKey("Iftekhari.Book", "CategoryId", "Iftekhari.Category");
            DropIndex("Iftekhari.Book", new[] { "CategoryId" });
            DropColumn("Iftekhari.Book", "CategoryId");
            DropColumn("Iftekhari.Book", "Language");
            DropColumn("Iftekhari.Book", "BookId");
            DropTable("Iftekhari.Category");
        }
    }
}
